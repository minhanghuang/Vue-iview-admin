// 导入自己需要的组件
import { Select, Option, OptionGroup, Input, Tree, Dialog, Row, Col, Tag, Button, ButtonGroup, Upload, Timeline, TimelineItem, Icon,  } from 'element-ui'
const element = {
    install: function (Vue) {
        Vue.use(Select);
        Vue.use(Option);
        Vue.use(OptionGroup);
        Vue.use(Input);
        Vue.use(Tree);
        Vue.use(Dialog);
        Vue.use(Row);
        Vue.use(Col);
        Vue.use(Tag);
        Vue.use(Button);
        Vue.use(ButtonGroup);
        Vue.use(Upload);
        Vue.use(Timeline);
        Vue.use(TimelineItem);
        Vue.use(Icon);
    }
};
export default element
