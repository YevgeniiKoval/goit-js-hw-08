import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

   const onPlayer = ({ seconds }) => {
    localStorage.setItem('CURRENT_TIME', seconds)
};

if(localStorage.getItem('CURRENT_TIME')){
    player.setCurrentTime(localStorage.getItem('CURRENT_TIME'));
}

player.on('timeupdate', throttle(onPlayer, 1000));
