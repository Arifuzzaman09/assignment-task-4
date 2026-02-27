let allBtn = 'all'

let btnActive =['bg-blue-400', 'text-white', 'rounded-sm']
let btnInactive =['bg-gray-200', 'rounded-sm']

let allContainer = document.getElementById('all-container')
let interviewContainer = document.getElementById('interview-container')
let rejectedContainer = document.getElementById('rejected-container')

let totalCount = document.getElementById('total-count')
let interviewCount = document.getElementById('interview-count')
let rejectedCount = document.getElementById('rejected-count')



function clickBtn(tab){
    let tabs = ['all','interview','rejected']

    for (const t of tabs) {
        const tabName =document.getElementById('btn-'+ t)
        if(t === tab){
            tabName.classList.remove(...btnInactive)
            tabName.classList.add(...btnActive)
        }else{
            tabName.classList.add(...btnInactive)
            tabName.classList.remove(...btnActive)
        }

    }
 
    let sectionItem = [allContainer,interviewContainer,rejectedContainer]

    for (const item of sectionItem) {
        item.classList.add('hidden')
    }
    if(tab === 'all'){
      allContainer.classList.remove('hidden')
    }
    else if(tab === 'interview'){
        interviewContainer.classList.remove('hidden')
    }
    else{
        rejectedContainer.classList.remove('hidden')
    }

}

totalCount.innerText=allContainer.children.length


clickBtn(allBtn)