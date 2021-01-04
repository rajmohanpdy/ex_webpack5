import $ from 'jquery';
import _ from 'lodash';
import './style.css';
import Icon from './rajmohan.jpg';

$('body').css({ 'background-color': '#eeeeee' });
$('h1#title')
  .css({ 'font-size': '80px', 'text-align': 'center', 'margin-top': '100px' })
  .addClass('hello')
  .text('Hello from webpack-dev-server sdsdsd');

  // function component() {
  //   const element = document.createElement('div');
  //    // Lodash, now imported by this script
  //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //  element.classList.add('hello');
 
  //  // Add the image to our existing div.
  //  const myIcon = new Image();
  //  myIcon.src = Icon;
 
  //  element.appendChild(myIcon);
 
  //   return element;
  // }
  
  // document.body.appendChild(component());

