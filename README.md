# webpack

Запуск локального сервера [http://localhost:8000](http://localhost:8000)
```sh
npm start
```

Сборка билда для продакшена
```sh
npm run build
```
Сборка билда в режиме девелопмента
```sh
npm run dev
```

Запуск тестов (еще нереализовано)
```sh
npm run test
```

Автоматическая компиляция изображений при сборке билда
пример : import img from '../../www/content/img/test.jpg';

Развернуть реакт приложение, подключить роуты и редукс.

Памятка: Большие названия CSS классов
  ```sh       
Каждое имя БЭМ класса выглядит вот так: block-name__element-name. Такое длинное имя сильно влияет на финальный размер CSS файла: на сайте Хабра, например, названия CSS классов занимают 36% от размера файла стилей. 
Google знает об этой проблеме и во всех своих проектах давно использует минификацию имен.


попробовать перейти на минифицированное название классов. Например по  имени класса и по пути расположения файла.
 ```

