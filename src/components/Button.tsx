
const Button = ({className, id, text} : ButtonProps) => {
  return (
    <a id={id} className={`${className ?? ''} cta-wrapper`} href="" >
        <div className='cta-button group'>
            <div className='bg-circle'/>
                <p className='text'>{text}</p>
                <div className='arrow-wrapper'>
                    <img src="/public/images/arrow-down.svg" alt="arrow" />
                </div>
        </div>
    </a>
  )
}

export default Button