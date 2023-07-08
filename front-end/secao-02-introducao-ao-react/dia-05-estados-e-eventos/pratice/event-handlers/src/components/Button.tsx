// /src/components/Button.tsx

function handleClick() {
  alert('Meu primeiro event handler com React')
}

function Button() {
  return (
    <button onClick={handleClick}>
      Clique em mim!
    </button>
  )
}

export default Button;