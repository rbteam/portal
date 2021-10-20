---
title: Это заголовок
layout: base.njk
---
### Тестовая страница

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ipsum repudiandae est incidunt dicta ab sed, culpa doloribus aperiam quisquam omnis reprehenderit aliquam eius ducimus iusto quis unde laborum a libero totam quidem illo molestias minima facere! Neque, iusto ex.

# заголовок

Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, facilis.

# Все страницы

{%  for page in collections.languages %}
    [{{ page.data.title }}]({{ page.url }})
{% endfor %}
