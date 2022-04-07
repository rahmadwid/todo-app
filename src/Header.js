import React, {Component} from 'react';
import Moment from 'moment';

class Header extends Component {
    render() {
        let indonesia = require(`moment/locale/id`)
        Moment.updateLocale(`id`, indonesia)
      return (
        <div>
          <img src='./logo2.jpg' width='200px' />
          <h2>Aplikasi Aktivitas Harian</h2>
          <p>{Moment().format(`dddd`)} {Moment().format(`LLL`)}</p>
        </div>
      )}}


export default Header;