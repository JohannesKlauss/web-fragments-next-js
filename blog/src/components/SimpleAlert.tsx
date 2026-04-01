'use client'

export const SimpleAlert = () => {
  return (
    <button type={'button'} onClick={() => alert('interactivity from the integrated micro frontend!')} className={'cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>
      Click me!
    </button>
  )
}
