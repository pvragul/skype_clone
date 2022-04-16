const chatListControlPanel = $('#chatsListControlPanel')

const iconOnSearch = $('.icon')

for (let il = 0; il < iconOnSearch.length; il++) {
    const element = iconOnSearch[il];
    element.addEventListener('mouseover', ()=> {
        const icon = $('.icon i')
        icon[il].classList.toggle('fas')
    })
    element.addEventListener('mouseout', ()=> {
        const icon = $('.icon i')
        icon[il].classList.toggle('fas')
    })
}



const chatControl = () => {
    return `<li class="chatList">
    <div class="userProfileImage">
        <img src="../../Front_end/Personal_portfolio_ubuntu_style/images/Facebook.svg" alt="dp">
    </div>
    <div class="userProfileNameandLastChat dflex-col">
        <div class="userProfileNamewithEmoji dflex-row">
            <div class="userProfileName">Ragul</div>
            <div class="userEmoji">&#x1F600</div>
        </div>
        <div class="userLastChat">hi or attachment</div>
    </div>
    <div class="userLastchatTime">03-04-2021</div>
</li>`
}

for (let cl = 0; cl < 20; cl++) {
chatListControlPanel.append(chatControl)
}
const chatList = document.querySelectorAll('.chatList')

chatList.forEach(chat => {
    chat.addEventListener('click', () => {
        const welcomeScreen = $('#welcomeScreen')
        if (welcomeScreen) {
            welcomeScreen.remove()
        }
    })
})
