import React from 'react';
import img from '../../www/content/img/home.jpg';
import img1 from '../../www/content/img/1.jpg';
import './style.less';
import './test.css';

class Component extends React.PureComponent {
    render() {
        return (
            <div>
                <h1 className="testclass">React component!</h1>
                <div className='bgc'>
                    Провекра стилей
                </div>
                Проверка фотографии меньше 100кб. заварачивает в base64.
                <img src={img} alt="home" />
                Проверка фотографии больше 100кб. отдельный файл.
                <img src={img1} alt="1" />
            </div>
        );
    }
}

export default Component;

