"use client"

import {startTransition, useActionState} from "react";
import {createPost} from "./actions";

export const ServerActionTest = () => {
  const [state, action, pending] = useActionState(() => createPost({msg: 'test'}), undefined)

  return (
    <div>
      <button type={'button'} disabled={pending} onClick={() => startTransition(action)} className={'cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>
        Post
        {pending && 'Loading....'}
      </button>

      {JSON.stringify(state)}
    </div>
  )
}
