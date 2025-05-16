
const Button = ({className, id, text} : ButtonProps) => {
  return (
    <a className={`${className ?? ''} cta-wrapper`}
        onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector('#work') as HTMLElement;
            if (target && id) {
                const offset = window.innerWidth * 0.15;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        }}>
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