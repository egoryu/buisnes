import React, { useState, useEffect } from 'react';
import "../../../style/profile.css"

export function Profile({ userId }) {
    const [userData, setUserData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const response = await axios.get(`/api/users/${userId}`);
                //setUserData(response.data);
                setUserData({
                    name: 'John',
                    surname: 'Doe',
                    email: 'johndoe@example.com',
                    age: 30,
                    location: 'New York',
                    telephone: '+7(921)888 88 88'
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, [userId]);

    const handleEdit = () => {
        setIsEditing(true);
        setEditedData(userData);
    };

    const handleInputChange = (e) => {
        setEditedData({
            ...editedData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        // Save edited data
        setUserData(editedData);
        setIsEditing(false);
    };

    return (
        <div>
            {!userData && <h2>Loading...</h2>}
            {(!!userData && !isEditing) && (
                <div className="user-profile">
                    <h1>Профиль</h1>
                    <p>Имя: {userData.name}</p>
                    <p>Фамилия: {userData.surname}</p>
                    <p>Email: {userData.email}</p>
                    <p>Возраст: {userData.age}</p>
                    <p>Страна: {userData.location}</p>
                    <p>Телефон: {userData.telephone}</p>
                    {!isEditing && (
                        <button onClick={handleEdit}>Редактировать</button>
                    )}

                </div>
            )}
            {isEditing && (
                <div className="user-profile">
                    <h2>Редактирование профиля</h2>
                    <label>Имя:</label>
                    <input
                        type="text"
                        name="name"
                        value={editedData.name}
                        onChange={handleInputChange}
                    />
                    <label>Фамилия:</label>
                    <input
                        type="text"
                        name="surname"
                        value={editedData.surname}
                        onChange={handleInputChange}
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={editedData.email}
                        onChange={handleInputChange}
                    />
                    <label>Возраст:</label>
                    <input
                        type="number"
                        name="age"
                        value={editedData.age}
                        onChange={handleInputChange}
                    />
                    <label>Страна:</label>
                    <input
                        type="text"
                        name="location"
                        value={editedData.location}
                        onChange={handleInputChange}
                    />
                    <label>Телефон:</label>
                    <input
                        type="text"
                        name="telephone"
                        value={editedData.telephone}
                        onChange={handleInputChange}
                    />
                    <p></p>
                    <button onClick={handleSave}>Сохранить</button>
                </div>
            )}
        </div>
    );
}