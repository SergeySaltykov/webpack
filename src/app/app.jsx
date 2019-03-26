import { NoteBookContainer } from 'modules/notebook/containers/NoteBookContainer';
import React from 'react';
import img1 from '../../www/content/img/1.jpg';
import img from '../../www/content/img/home.jpg';

class App extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>header</h1>
                <div>
                    <h1>wrapper</h1>

                    <NoteBookContainer />
                    Проверка фотографии меньше 100кб. заварачивает в base64.
                    <img src={img} alt="home" />
                    Проверка фотографии больше 100кб. отдельный файл.
                    <img src={img1} alt="1" />
                </div>
                <h1>footer</h1>
            </div>
        );
    }
}

export default App;
