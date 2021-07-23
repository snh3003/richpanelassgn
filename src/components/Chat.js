import React from 'react';

let a = [
    {
        message: 'Hi, hello',
        time: new Date(Date.now()).toISOString(),
        user: false,
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
        message: 'Hi, hello',
        time: new Date(Date.now()).toISOString(),
        user: true,
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
        message: 'Hi, hello',
        time: new Date(Date.now()).toISOString(),
        user: true,
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
        message: 'Hi, hello',
        time: new Date(Date.now()).toISOString(),
        user: false,
        img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    }
]


const Chat = ({name, pic}) => {
    return (
        <div>
            <h2>{name}</h2>
            <div style={{height: '100vh', backgroundColor: '#f4f4f4'}}>
                {
                    a.map(
                        (item, id) => { 
                            console.log(item);
                            return (
                            <div key={id}>
                                {
                                    item.user 
                                    ? 
                                    <div>
                                        <img src = {item.img} alt='Hail Satan' style={{width: '50px',borderRadius: '30px', marginLeft: '-25rem', padding: '10px'}}/>
                                        <center>
                                            <div style={{backgroundColor: 'white', width: '100px'}}>
                                                {item.message}
                                            </div>
                                        </center>
                                        <div>
                                            {item.time}
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <img src = {item.img} alt='Hail Satan' style={{width: '50px', borderRadius: '30px', marginLeft: '-5rem', padding: '10px'}}/>
                                        <center>
                                            <div style={{backgroundColor: 'white', width: '100px'}}>
                                                {item.message}
                                            </div>
                                        </center>
                                        <div>
                                            {item.time}
                                        </div>
                                    </div>    
                                }
                            </div>
                        )}
                    )
                }
            </div>
        </div>
    );
}

export default Chat;