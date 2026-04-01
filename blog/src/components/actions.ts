"use server"

export async function createPost(data?: { msg: string }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'success',
        data,
      })
    }, 3000)
  })
}
