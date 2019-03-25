import React from 'react';
import { Component1 } from './component1/component';
import { Component2 } from './component2/component';
import { Component3 } from './component3/component';
import img1 from '../../www/content/img/1.jpg';
import img from '../../www/content/img/home.jpg';

class App extends React.PureComponent {
    render() {
        const text = 'проверка пропсов';

        return (
            <div>
                <h1>React component!</h1>
                <Component1 />
                <Component2 />
                <Component3 text={text} />
                Проверка фотографии меньше 100кб. заварачивает в base64.
                <img src={img} alt="home" />
                Проверка фотографии больше 100кб. отдельный файл.
                <img src={img1} alt="1" />
            </div>
        );
    }
}

export default App;
