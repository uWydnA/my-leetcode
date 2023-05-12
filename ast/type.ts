export interface TdAffixProps {
  /**
   * 指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default () => (() => window)
   */
  container: any;
  /**
   * @desc 距离容器顶部达到指定距离后触发固定
   * @default 0
   */
  offsetBottom?: number;
  /**
   * @desc 距离容器底部达到指定距离后触发固定
   * @default 0
   */
  offsetTop?: number;
  /**
   * @desc 固钉定位层级，样式默认为 500
   */
  zIndex?: number;
  /**
   * @desc 固定状态发生变化时触发
   */
  onFixedChange?: (affixed: boolean, context: { top: number }) => void;
}
