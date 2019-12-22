var timeline =  '[{"id": "0", "color": "blue", "icon": "md-snow", "count_inner": 1, "content": [{"id_inner": "0", "col": "第一次接触编程"}, {"id_inner": "1", "col": "C语言 Hello World !"}], "node_name": "2014/09"}, {"id": "1", "color": "blue", "icon": "md-ionic", "count_inner": 1, "content": [{"id_inner": "0", "col": "暑假"}, {"id_inner": "1", "col": "自学单片机"}], "node_name": "2015/07"}]'


console.log(timeline)
console.log(typeof timeline)
console.log(JSON.parse(timeline))
