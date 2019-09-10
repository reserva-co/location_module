/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import ActivityEntry from './ActivityEntry.jsx';


const ActivityCounter = styled.div`
  text-align: center;
`;

const ActivitySlider = styled.div`
  position: relative;
  max-width: 885px;
  margin: 0 auto;
`;

const ActivitySliderWrapper = styled.div`
  display: flex;
  position: absolute;
`;

const ActivityArrowRight = styled.div`
  position: absolute;
  top: 80%;
  width: 2vmin;
  height: 2vmin;
  background: transparent;
  border-top: 0.5vmin solid black;
  border-right: 0.5vmin solid black;
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
  left: -18px;
  transform: translate3d(0,-50%,0) rotate(-135deg);
`;

const ActivityArrowleft = styled.div`
  position: absolute;
  top: 80%;
  width: 2vmin;
  height: 2vmin;
  background: transparent;
  border-top: 0.5vmin solid black;
  border-right: 0.5vmin solid black;
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
  right: -18px;
  transform: translate3d(0,-50%,0) rotate(45deg);
`;

class Activity extends React.Component {
  constructor(props) {
    super(props);
    const { activities } = this.props;
    this.state = {
      activities,
      showActivity: [],
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidMount() {
    const { activities } = this.state;
    if (activities.length > 0) {
      const arr = activities.slice(0, 5);
      this.setState({
        showActivity: arr,
      });
    }
  }

  next() {
    const { activities, showActivity } = this.state;
    const newIdx = showActivity[0].id + 1;
    const arr = activities.slice(newIdx, newIdx + 5);
    this.setState({
      showActivity: arr,
    });
  }

  prev() {
    const { activities, showActivity } = this.state;
    const preIdx = showActivity[4].id - 1;
    const arr = activities.slice(preIdx - 4, preIdx + 1);
    this.setState({
      showActivity: arr,
    });
  }

  render() {
    const { activities, showActivity } = this.state;
    return (
      <div>
        {showActivity.length > 0 && (
        <ActivityCounter>
          <ActivitySlider>
            <ActivitySliderWrapper>
              {showActivity[0].id !== activities.length - 5 && (
              <ActivityArrowleft id="left" onClick={this.next} />
              )}
              {showActivity.map((a) => (
                <ActivityEntry activity={a} key={a.id} />
              ))}
              {showActivity[0].id - 1 >= 0 && (
              <ActivityArrowRight id="right" onClick={this.prev} />
              )}
            </ActivitySliderWrapper>
          </ActivitySlider>
        </ActivityCounter>
        )}
      </div>

    );
  }
}

Activity.propTypes = {
  activities: PropTypes.array.isRequired,
};

export default Activity;
