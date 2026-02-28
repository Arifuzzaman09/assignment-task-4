let allBtn = 'all'

let btnActive = ['bg-blue-400', 'text-white', 'rounded-sm']
let btnInactive = ['bg-gray-200', 'rounded-sm']

let allContainer = document.getElementById('all-container')
let interviewContainer = document.getElementById('interview-container')
let rejectedContainer = document.getElementById('rejected-container')

let totalCount = document.getElementById('total-count')
let interviewCount = document.getElementById('interview-count')
let rejectedCount = document.getElementById('rejected-count')
let empty = document.getElementById('empty')
let jobsCount = document.getElementById('jobs-count')


function clickBtn(tab) {
    let tabs = ['all', 'interview', 'rejected']
    allBtn = tab
    for (const t of tabs) {
        const tabName = document.getElementById('btn-' + t)
        if (t === tab) {
            tabName.classList.remove(...btnInactive)
            tabName.classList.add(...btnActive)
        } else {
            tabName.classList.add(...btnInactive)
            tabName.classList.remove(...btnActive)
        }

    }

    let sectionItem = [allContainer, interviewContainer, rejectedContainer]

    for (const item of sectionItem) {
        item.classList.add('hidden')

    }
    empty.classList.add('hidden')

    if (tab === 'all') {
        allContainer.classList.remove('hidden')
        if (allContainer.children.length < 1) {
            empty.classList.remove('hidden')
        }
    }
    else if (tab === 'interview') {
        interviewContainer.classList.remove('hidden')
        if (interviewContainer.children.length < 1) {
            empty.classList.remove('hidden')
        }
    }
    else {
        rejectedContainer.classList.remove('hidden')
        if (rejectedContainer.children.length < 1) {
            empty.classList.remove('hidden')
        }

    }
    countStatus()
}

totalCount.innerText = allContainer.children.length


clickBtn(allBtn)

document.getElementById('main-container').addEventListener('click', function (event) {
    let targetAll = event.target
    let card = targetAll.closest('.card')
    let parent = card.parentNode;
    let appliedBtn = card.querySelector('.applied-btn')

    if (targetAll.classList.contains('interview-btn')) {
        appliedBtn.innerText = 'interviewed'
        interviewContainer.appendChild(card)
    }
    if (targetAll.classList.contains('rejected-btn')) {
        appliedBtn.innerText = 'rejected'
        rejectedContainer.appendChild(card)
    }
    if (targetAll.classList.contains('delete-btn')) {
        parent.removeChild(card)
    }
    countStatus()
})


function countStatus() {
   
    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length
    }
    totalCount.innerText = counts.all;
    interviewCount.innerText = counts.interview;
    rejectedCount.innerText = counts.rejected;

    jobsCount.innerText = counts[allBtn];

    if (counts[allBtn] < 1) {
        empty.classList.remove('hidden')
    } else{
        empty.classList.add('hidden')
    }
}
countStatus()