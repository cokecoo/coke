// 编写Tab类，用来创建标签页对象
class Tab {
  // 构造方法
  constructor(id) {
    this.main = document.querySelector(id);
  }
  toggleTab() { }	// 切换标签页
  addTab() { }		// 添加标签页
  removeTab() { }	// 删除标签页
  editTab() { }		// 修改标签页
}
// 创建标签页对象
new Tab('#tab');
