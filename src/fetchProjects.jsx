import {createClient} from 'contentful'
// 引入 Contentful JavaScript SDK。通过这个，可以执行对 Contentful 空间的 API 请求，如获取内容、查询内容模型等。

import React, { useEffect, useState } from 'react'

const client = createClient({
    space: 'et6gys7jpls9',
    accessToken: import.meta.env.VITE_API_KEY,
    // 在 Vite 项目中，可以在项目根目录的 .env 文件中设置环境变量。Vite 约定以 VITE_ 开头的环境变量将被暴露在客户端。
    environment:'master'
})
// 这段代码是在设置和初始化一个 Contentful 客户端（client），以便在编程中中使用 Contentful 提供的内容。需手动配置。


export const useFetchProjects = ()=> {
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState(null)

    const getData = async() => {
        try {   // try 不适合和 .then 一起用，容易出错。
            const response = await client.getEntries({content_type:'projects'})
            // 这段代码是使用 Contentful JavaScript SDK 来从 Contentful 的指定空间中检索内容。具体来说，这是在请求拥有特定内容类型 projects 的所有内容项。
            // 当从系统中请求内容条目（entries）时，每个 entry 都以对象的形式返回，然后可以通过 object.key 的方式来访问该对象中特定 key（字段）的值。

            // 用 try这种方法时，await必要，因为需要手动设置让try后面的指令必须等待try执行完毕再执行；而fetch后面的.then指令默认会等待fetch指令执行完毕再运行。

            const projects = response.items.map((item) => {
                const {title, url, image} = item.fields
                const id = item.sys.id
                const img = image?.fields?.file?.url
                return {title:title, url, id, img}  // 这里是用的destruction写法，title 就等于 title:title， url、id、img同理。
            })
            
            setProjects(projects)  // 此处就是将上面return 返回的 {title:title, url, id, img} 这个对象作为新值传到hook中。
            setLoading(false)
        }
        catch(error) {
            console.log(error)
            setLoading(false)
    }
  }

  useEffect(() => {
        getData()
    }, [])

    return {loading, projects}  // destruction 的写法，将上面的 hook 中的状态值进行打包返回。
}


