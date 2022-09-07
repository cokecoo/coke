// 编写Tab类，用来创建标签页对象
class Tab {
  // 构造方法
  constructor(id) {
    this.main = document.querySelector(id);					        // 大盒子
    this.lis = this.main.querySelectorAll('li');				    // 小标签
    this.sections = this.main.querySelectorAll('section');	// 内容区域
    this.init();
  }
  init() {
    var that = this;
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = function () {
        console.log(this.index);  // 目前只获取标签的索引，其他操作在后面实现
        that.toggleTab(this);
      };
    }
  }
  // 切换标签页
  toggleTab(el) {
    this.clearClass();
    el.className = 'liactive';
    this.sections[el.index].className = 'conactive';
  }
  clearClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = '';
      this.sections[i].className = '';
    }
  }
  addTab() { }		// 添加标签页
  removeTab() { }	// 删除标签页
  editTab() { }		// 修改标签页
}
// 创建标签页对象
new Tab('#tab');
