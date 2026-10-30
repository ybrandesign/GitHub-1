export default function Artwork({ title, number, tone = 'light', className = '' }) {
  return (
    <div className={`artwork artwork--${tone} ${className}`}>
      <img src="/images/placeholder.svg" alt={`${title} 作品图片占位，待替换为真实图片`} width="1600" height="1100" />
      <div className="artwork-caption" aria-hidden="true"><span>{number} / IMAGE PLACEHOLDER</span><span>{title}</span></div>
      <span className="artwork-cross" aria-hidden="true">+</span>
    </div>
  )
}
