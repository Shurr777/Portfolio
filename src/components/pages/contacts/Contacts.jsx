import React from 'react';

const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title2">Location</h2>
                        <p>Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title2">Phone</h2>
                        <p><a href="tel:+380503004379">+38(050)300-43-79</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title2">Messengers</h2>
                        <div>
                            <p><a href="tg://resolve?domain=@Almarkiz">Telegram</a></p>
                            <p><a href="whatsapp://send?phone=+380503004379">WatsApp</a></p>
                            <p><a href="viber://chat?number=%2B380503004379">Viber</a></p>
                        </div>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title2">Email</h2>
                        <p><a href="mailto:almarkiz777@gmail.com">almarkiz777@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Contacts;