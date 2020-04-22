import Radium from 'radium';

let spin = Radium.keyframes({
    '0%': {
        transform: 'rotate(0deg)'
    },
    '100%': {
        transform: 'rotate(360deg)'
    }
});

let mainColor = 'red';
let highlightColor = 'hsla(0, 100%, 70%)';
let shadowColor = 'hsl(0, 0%, 80%)';
let breakPointMedium = '@media screen and (max-width: 700px)';
let breakPointLarge = '@media screen and (max-width: 900px)';
let spinner = {
    animation: 'x 1.5s ease-in-out 0s infinite',
    animationName: spin,
} 
let popupBlock = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(0, 0%, 95%)',
    boxShadow: '0 0 20px 3px, 0 0 5px 1px inset',
    color: 'hsl(0, 0%, 60%)',
    borderRadius: '5px',
    minWidth: '210px',
    margin: 'auto'
}
let popupButtons = {
    marginTop: '10px',
    backgroundColor: mainColor,
    color: 'white',
    padding: '7px 15px',
    borderRadius: '10px',
    border: 'none',
    boxShadow: '0 0 0 0',
    transition: 'all 0.5s',
    ':hover': {
        backgroundColor: highlightColor,
        boxShadow: '0 0 0 2px',
        color: mainColor,
        transition: 'all 0.5s'
    },
    ':focus': {
        backgroundColor: global.highlightColor,
        boxShadow: '0 0 0 2px',
        color: global.mainColor
    }
}
let alert = {
    fontSize: '1.7em',
    width: '100%',
    padding: '5px',
    textAlign: 'center',
    backgroundColor: 'hsla(0, 0%, 100%, 0.7)',
}
let playerOneColor = 'hsl(0, 100%, 70%)';
let playerTwoColor = 'hsl(220, 80%, 60%)';

export default {
    mainColor,
    highlightColor,
    shadowColor,
    breakPointLarge,
    breakPointMedium,
    spinner,
    popupBlock,
    popupButtons,
    alert,
    playerOneColor,
    playerTwoColor
}
