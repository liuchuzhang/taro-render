import Taro from '@tarojs/taro'
import './dialog.scss'

let dialogs = [];

interface DialogProps {
  title: string,
  content?: string,
}

export function Dialog({
  title,
  content
}: DialogProps) {
  const Content = content ? <p>{content}</p> : null;
  return (
    <div className="ui-Dialog">
      <h2>{title}</h2>
      {Content}
    </div>
  )
}

interface InstanceProps extends DialogProps {
  container?: HTMLElement,
  duration?: number
}

const dialog = (args: InstanceProps): void => {
  const { container, duration, ...props } = args;
  const time = duration || 2000;
  const div = document.createElement('div');
  const elem = container || document.body
  elem.appendChild(div)
  Taro.render(<Dialog {...props} />, div)

  setTimeout(() => {
    elem.removeChild(div)
  }, time);
}

export default dialog;