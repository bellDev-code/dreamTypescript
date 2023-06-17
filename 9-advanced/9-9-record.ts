{
    type PageInfo = {
        title: string
    }
    type Page = 'home' | 'page' | 'contract';

    // 하나의 타입에 연결하고 싶을때 Key & Value
    const nav: Record<Page, PageInfo> = {
        home: { title: 'Home'},
        page: { title: 'Page'},
        contract: { title: 'Contract'}
    }
    console.log(nav)
}