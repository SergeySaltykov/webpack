import React from 'react';
import img from '../../www/content/img/home.jpg';
import img1 from '../../www/content/img/1.jpg';
import {Component1} from 'app/component1/component';
import {Component2} from 'app/component2/component';

class Component extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>React component!</h1>
                <Component1 />
                <Component2 />
                Проверка фотографии меньше 100кб. заварачивает в base64.
                <img src={img} alt="home" />
                Проверка фотографии больше 100кб. отдельный файл.
                <img src={img1} alt="1" />
            </div>
        );
    }
}

export default Component;

