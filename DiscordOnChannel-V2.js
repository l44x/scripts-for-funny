// creator: not (l44x)
// version: v2
// discord-scripting
// Lel

/* -------------------------------

        > ChatColour
        > VoicePanel Image
        > Stop Kick Channel

*/ -------------------------------



// Globals Variable
let channelId = '';
let userId = '';
let nickname = '';

function createConfigPanel() {
    const panel = document.createElement('div');
    panel.classList.add('panel'); 
    panel.style.position = 'absolute';
    panel.style.top = '20px';
    panel.style.left = '20px';
    panel.style.background = 'white';
    panel.style.padding = '20px';
    panel.style.border = '3px solid black';
    panel.style.zIndex = '1000';
    panel.style.width = '300px';
    panel.style.fontFamily = 'Arial, sans-serif';
    panel.style.cursor = 'move'; 

    const title = document.createElement('h2');
    title.textContent = 'Panel de configuracion by: not';
    title.style.textAlign = 'center';
    title.style.marginBottom = '10px';
    title.classList.add('title-panel');

    // Etiqueta y entrada para Channel ID
    const channelIdLabel = document.createElement('label');
    channelIdLabel.textContent = 'Channel ID:';
    const channelIdInput = document.createElement('input');
    channelIdInput.type = 'text';
    channelIdInput.id = 'channelIdInput';
    channelIdInput.style.width = '100%';
    channelIdInput.style.marginBottom = '10px';

    const userIdLabel = document.createElement('label');
    userIdLabel.textContent = 'User ID:';
    const userIdInput = document.createElement('input');
    userIdInput.type = 'text';
    userIdInput.id = 'userIdInput';
    userIdInput.style.width = '100%';
    userIdInput.style.marginBottom = '10px';

    const nicknameLabel = document.createElement('label');
    nicknameLabel.textContent = 'Nickname:';
    const nicknameInput = document.createElement('input');
    nicknameInput.type = 'text';
    nicknameInput.id = 'nicknameInput';
    nicknameInput.style.width = '100%';
    nicknameInput.style.marginBottom = '10px';

    const applyButton = document.createElement('button');
    applyButton.textContent = 'DOnt k1ck M3';
    applyButton.style.width = '100%';
    applyButton.style.marginTop = '10px';
    applyButton.style.padding = '8px';
    applyButton.style.border = 'none';
    applyButton.style.backgroundColor = '#181040'; 
    applyButton.style.color = 'white'; 
    applyButton.style.cursor = 'pointer';

    const applyButton2 = document.createElement('button');
    applyButton2.textContent = 'Ch4t C0lour';
    applyButton2.style.width = '100%';
    applyButton2.style.marginTop = '10px';
    applyButton2.style.padding = '8px';
    applyButton2.style.border = 'none';
    applyButton2.style.backgroundColor = '#870313'; 
    applyButton2.style.color = 'white'; 
    applyButton2.style.cursor = 'pointer'; 

    const applyButton3 = document.createElement('button');
    applyButton3.textContent = 'Ch4nnel Im4ge (.gif .jpg .png .web)';
    applyButton3.style.width = '100%';
    applyButton3.style.marginTop = '10px';
    applyButton3.style.padding = '8px';
    applyButton3.style.border = 'none';
    applyButton3.style.backgroundColor = '#2C2A2B'; 
    applyButton3.style.color = 'white'; 
    applyButton3.style.cursor = 'pointer';

    const applyButton4 = document.createElement('button');
    applyButton4.textContent = 'R3load D1scord';
    applyButton4.style.width = '100%';
    applyButton4.style.marginTop = '10px';
    applyButton4.style.padding = '8px';
    applyButton4.style.border = 'none'
    applyButton4.style.backgroundColor = '#32057C'; 
    applyButton4.style.color = 'white'; 
    applyButton4.style.cursor = 'pointer';

    panel.appendChild(title);
    panel.appendChild(channelIdLabel);
    panel.appendChild(channelIdInput);
    panel.appendChild(document.createElement('br'));
    panel.appendChild(userIdLabel);
    panel.appendChild(userIdInput);
    panel.appendChild(document.createElement('br'));
    panel.appendChild(nicknameLabel);
    panel.appendChild(nicknameInput);
    panel.appendChild(document.createElement('br'));
    panel.appendChild(applyButton);
    panel.appendChild(applyButton2)
    panel.appendChild(applyButton3)
    panel.appendChild(applyButton4)

    document.body.appendChild(panel);

    let offsetX, offsetY;
    let isDragging = false;

    function startDrag(e) {
        isDragging = true;
        offsetX = e.clientX - panel.getBoundingClientRect().left;
        offsetY = e.clientY - panel.getBoundingClientRect().top;
    }

    function dragPanel(e) {
        if (isDragging) {
            panel.style.left = (e.clientX - offsetX) + 'px';
            panel.style.top = (e.clientY - offsetY) + 'px';
        }
    }

    function stopDrag() {
        isDragging = false;
    }

    panel.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', dragPanel);
    document.addEventListener('mouseup', stopDrag);

    applyButton.addEventListener('click', function() {
        channelId = channelIdInput.value.trim();
        userId = userIdInput.value.trim();
        nickname = nicknameInput.value.trim();

        console.log('Channel ID:', channelId);
        console.log('User ID:', userId);
        console.log('Nickname:', nickname);
    });

    applyButton2.addEventListener('click', function() {
        var elemento = document.querySelector('.scroller_e2e187.customTheme_c49869.auto_c49869.scrollerBase_c49869.disableScrollAnchor_c49869.managedReactiveScroller_c49869');
        // Define una lista de colores oscuros
        var colores = ['#11044B', '#39253E', '#3E1423', 
            '#05571D','#078477','#2E192C','#1D1919',
            '#444044','#50030A','#166408','#3F4B3D'];
        function cambiarColor() {
            var randomColor = colores[Math.floor(Math.random() * colores.length)];
            elemento.style.backgroundColor = randomColor;
        }
        setInterval(cambiarColor, 100);
    })


    applyButton3.addEventListener('click', function(){
        let url = prompt("Ingresa la url de tu imagen", 'https://media.giphy.com/media/5z0Clc1s7uQfxuC1eG/giphy.gif');
        let imageUrl=url
        document.getElementsByClassName('root_dd069c')[0].style.backgroundImage=`url("${imageUrl}")`
        document.getElementsByClassName('root_dd069c')[0].style.backgroundRepeat='none'
        document.getElementsByClassName('root_dd069c')[0].style.backgroundSize='cover'

    })

    applyButton4.addEventListener('click', function(){
        location.reload()
    })
}


createConfigPanel();

console.log('Channel ID:', channelId);
console.log('User ID:', userId);
console.log('Nickname:', nickname);


setInterval(function(){
        let getChannelIdElement = document.querySelector(`a[data-list-item-id="${channelId}"]`);
        let getChannelId = getChannelIdElement ? getChannelIdElement.getAttribute('data-list-item-id') : null;

        let verifiedImgOnChannelElement = document.querySelector(`div[style*="https://cdn.discordapp.com/avatars/${userId}"]`);
        let verifiedImgOnChannel = verifiedImgOnChannelElement ? verifiedImgOnChannelElement : null;

        let getChannelDescansoLengthUsers = document.querySelector('.containerDefault_f6f816[data-dnd-name="🛐│Descanso"]').children[1].children.length;
        let getChannelDescansoLengthUsersNull = getChannelDescansoLengthUsers ? getChannelDescansoLengthUsers : null;

        let verifiedImgOnChannelElement2 = document.querySelector(`div[style*="https://cdn.discordapp.com/avatars/${userId}"]`);

        if (verifiedImgOnChannelElement2) {
            console.log('Elemento encontrado:', verifiedImgOnChannelElement2);
        } else {
            console.log('Elemento no encontrado');
            console.log('Creando el canal...');
            document.querySelector('a[data-list-item-id="channels___1180080646639583252"]').click(); 
            document.querySelector('.primaryButton_acae5d.gutter_acae5d.button_dd4f85.lookFilled_dd4f85.colorBrand_dd4f85.sizeLarge_dd4f85.grow_dd4f85').click();
            verifiedImgOnChannel = verifiedImgOnChannel.baseURI.split('/').pop(); // checker
            console.log(verifiedImgOnChannel);
        }

        if (getChannelDescansoLengthUsers > 0) {
            let searchNameElement = document.querySelector('.containerDefault_f6f816[data-dnd-name="🛐│Descanso"]').children[1] || undefined;
            let Nickname = "Maria Jose"
            try {
                for (let index = 0; index < 10; index++) {
                    if (searchNameElement.children[index].innerText==nickname) {
                        console.log(nickname)
                        console.log('Creando el canal...');
                        document.querySelector('a[data-list-item-id="channels___1180080646639583252"]').click(); 
                        document.querySelector('.primaryButton_acae5d.gutter_acae5d.button_dd4f85.lookFilled_dd4f85.colorBrand_dd4f85.sizeLarge_dd4f85.grow_dd4f85').click();
                        verifiedImgOnChannel = verifiedImgOnChannel.baseURI.split('/').pop(); // checker
                        console.log(verifiedImgOnChannel);
                        break;
                    }
                }
            } catch (error) {
                console.log("error");
            }
        } else if (getChannelId || verifiedImgOnChannel) {
            if (verifiedImgOnChannel) {
                console.log('¡Te encuentras dentro del canal!');
            } else {
                console.log('Intentando unirte al canal...');
                document.querySelector(`a[data-list-item-id="${channelId}"]`).click();
                document.querySelector('.primaryButton_acae5d.gutter_acae5d.button_dd4f85.lookFilled_dd4f85.colorBrand_dd4f85.sizeLarge_dd4f85.grow_dd4f85').click();
                console.log('Te uniste correctamente al canal -> 1259892010010284144');
            }
            console.log('ipipipipipipipipi 2');
        } else if (verifiedImgOnChannel) {
            console.log("Creamos un canal propio.");
        } else {
            console.log('Creando el canal...');
            document.querySelector(`a[data-list-item-id="${channelId}"]`).click();
            document.querySelector('.primaryButton_acae5d.gutter_acae5d.button_dd4f85.lookFilled_dd4f85.colorBrand_dd4f85.sizeLarge_dd4f85.grow_dd4f85').click();
            verifiedImgOnChannel = verifiedImgOnChannel.baseURI.split('/').pop(); // checker
            console.log(verifiedImgOnChannel);
        }
},3000)

setInterval(function(){
    let verifiedImgOnChannelElement = document.querySelector(`div[style*="https://cdn.discordapp.com/avatars/${userId}"]`); 
    if (verifiedImgOnChannelElement) {
        console.log('Success script..');
    } else {
        console.log('Elemento no encontrado');
        console.log('Creando el canal...');
        document.querySelector('a[data-list-item-id="channels___1180080646639583252"]').click(); 
        document.querySelector('.primaryButton_acae5d.gutter_acae5d.button_dd4f85.lookFilled_dd4f85.colorBrand_dd4f85.sizeLarge_dd4f85.grow_dd4f85').click();
        verifiedImgOnChannel=verifiedImgOnChannel.baseURI.split('/').pop();  // checker
        console.log(verifiedImgOnChannel);
    }
},1000)
