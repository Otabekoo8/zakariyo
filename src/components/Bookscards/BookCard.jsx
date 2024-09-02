import React, { useState } from "react";
import "./Bookcard.css";
import img1 from "../../assets/book_img_1.png";
import img2 from "../../assets/book_img_2.png";
import img3 from "../../assets/book_img_3.png";
import img4 from "../../assets/book_img_4.png";
import pop1 from "../../assets/pop-1.png";
import pop2 from "../../assets/pop-2.png";
import pop3 from "../../assets/pop-3.png";
import pop4 from "../../assets/pop-4.png";
const locations = {
    Uzbekistan: {
        regions: ["Tashkent", "Samarkand", "Bukhara", "Namangan", "Andijon"],
        cities: {
            Tashkent: ["Mirzo Ulugbek", "Chilanzar", "Yunusabad"],
            Samarkand: ["Registan", "Gur-Emir"],
            Bukhara: ["Lyabi-Hauz", "Ark Fortress"],
            Namangan: ["Chortoq", "Uychi", "Uchqurg'on", "To'raqorg'on"],
            Andijon: ["Farg'ona", "Marg'ilon"]
        }
    },
    USA: {
        regions: ["California", "Texas", "New York"],
        cities: {
            California: ["Los Angeles", "San Francisco"],
            Texas: ["Houston", "Dallas"],
        }
    }
};
const books = [
    { id: 1, genre: "Fiction", title: "Ko‘ra olmaydigan yorug‘lik", author: "Entoni Doerr", img: img1, votes: 1988288 },
    { id: 2, genre: "Fiction", title: "Qaynoq botqoq", author: "Delia Ovens", img: img2, votes: 1988288 },
    { id: 3, genre: "Business", title: "Boy odamlarning muammolari", author: "Kevin Kvan", img: img3, votes: 1988288 },
    { id: 4, genre: "Business", title: "Aql bovar qilmas boylar", author: "Kevin Kvan", img: img4, votes: 1988288 },
];
const Bookcards = () => {
    const [selectedGenre, setSelectedGenre] = useState("Barcha Janrlar");
    const [selectedBook, setSelectedBook] = useState(null);
    const [showPurchaseModal, setShowPurchaseModal] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
        setSelectedBook(null); // Reset selected book when changing genre
    };
    const handleBookClick = (book) => {
        setSelectedBook(book);
    };
    const closeModal = () => {
        setSelectedBook(null);
        setShowPurchaseModal(false);
        setShowConfirmation(false);
    };
    const handlePurchaseClick = (event) => {
        event.stopPropagation(); // Prevent the parent click event from being triggered
        setShowPurchaseModal(true);
    };
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedRegion("");
        setSelectedCity("");
    };
    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value);
        setSelectedCity("");
    };
    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowPurchaseModal(false);
        setShowConfirmation(true);
    };
    const filteredBooks = selectedGenre === "Barcha Janrlar" ? books : books.filter(book => book.genre === selectedGenre);
    return (
        <div className="big-diw">
            <div className="container">
                <div className="barchasi">
                    <div className="genre-diw">
                        <h2>Kitoblar Janr bo‘yicha</h2>
                        <h4 onClick={() => handleGenreClick("Barcha Janrlar")}>Barcha Janrlar</h4>
                        <h4 onClick={() => handleGenreClick("Business")}>Biznes</h4>
                        <h4 onClick={() => handleGenreClick("Fiction")}>Badiiy</h4>
                        <div className="chizq"></div>
                        <div className="reco-diw">
                            <h3>Tavsiyalar</h3>
                            <h4>Oyning San'atkori</h4>
                            <h4>Yil Kitobi</h4>
                            <h4>Top Janr</h4>
                            <h4>Trend</h4>
                        </div>
                    </div>
                    <div className="books-diw">
                        <h1>Tavsiya etilgan</h1>
                        <div className="book-list">
                            {filteredBooks.map(book => (
                                <div className="flex" key={book.id}>
                                    <div className="book-card" onClick={() => handleBookClick(book)}>
                                        <div className="img">
                                            <img src={book.img} alt={book.title} />
                                        </div>
                                        <div className="text">
                                            <h2>{book.title}</h2>
                                            <h3>{book.author} tomonidan</h3>
                                            <h4>{book.votes.toLocaleString()} ovoz</h4>
                                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {selectedBook && (
                            <div className="modal-overlay" onClick={closeModal}>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                    <span className="close-button" onClick={closeModal}>&times;</span>
                                    <div className="modal-book-details">
                                        <img src={selectedBook.img} alt={selectedBook.title} />
                                        <div className="modal-text">
                                            <h2>{selectedBook.title}</h2>
                                            <h3>Muallif: {selectedBook.author}</h3>
                                            <h4>Ovozlar: {selectedBook.votes.toLocaleString()}</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique libero.</p>
                                            <p>"Kora olmaydigan yorug'lik" (aslida "All the Light We Cannot See") - bu amerikalik yozuvchi Entoni Doerrning 2014-yilda chop etilgan romani. Roman Ikkinchi Jahon urushi davrida Frantsiya va Germaniyada sodir bo'lgan voqealarni tasvirlaydi va asosan ikki asosiy qahramon - fransuz ko'r qiz Mari-Laure LeBlanc va nemis yetim o‘smir Veyner Pfennigning hayoti atrofida rivojlanadi.</p>
                                            <button onClick={handlePurchaseClick}>Harid qilish</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {showPurchaseModal && (
                            <div className="modal-overlay" onClick={closeModal}>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                    <span className="close-button" onClick={closeModal}>&times;</span>
                                    <h2>Xarid qilish</h2>
                                    <form onSubmit={handleSubmit} className="purchase-form">
                                        <label>Email:</label>
                                        <input type="email" required />
                                        <label>Telefon Raqami:</label>
                                        <input type="tel" required />
                                        <label>Davlatingiz:</label>
                                        <select value={selectedCountry} onChange={handleCountryChange} required>
                                            <option value="">Tanlang</option>
                                            {Object.keys(locations).map((country) => (
                                                <option key={country} value={country}>{country}</option>
                                            ))}
                                        </select>
                                        <label>Viloyat:</label>
                                        <select value={selectedRegion} onChange={handleRegionChange} required disabled={!selectedCountry}>
                                            <option value="">Tanlang</option>
                                            {selectedCountry && locations[selectedCountry].regions.map((region) => (
                                                <option key={region} value={region}>{region}</option>
                                            ))}
                                        </select>
                                        <label>Tuman/Shahar:</label>
                                        <select value={selectedCity} onChange={handleCityChange} required disabled={!selectedRegion}>
                                            <option value="">Tanlang</option>
                                            {selectedRegion && locations[selectedCountry].cities[selectedRegion].map((city) => (
                                                <option key={city} value={city}>{city}</option>
                                            ))}
                                        </select>

                                        <button type="submit" className="submit-btn">Yuborish</button>
                                    </form>
                                </div>
                            </div>
                        )}
                        {showConfirmation && (
                            <div className="modal-overlay" onClick={closeModal}>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                    <span className="close-button" onClick={closeModal}>&times;</span>
                                    <h2>Xaridingizdan minnadormiz!</h2>
                                    <p>Sizning buyurtmangiz muvaffaqiyatli qabul qilindi. Tez orada siz bilan bog'lanamiz.</p>
                                </div>
                            </div>
                        )}
                        <div className="popular-div">
                            <h1>Ommabop</h1>
                            <div className="four-div">
                                <div className="birinchi-div">
                                    <img src={pop1} alt="" />
                                    <h3>Siz haqingizda</h3>
                                    <h5>Tere Liye</h5>
                                </div>
                                <div className="ikkinchi-div">
                                    <img src={pop2} alt="" />
                                    <h3>Pergi</h3>
                                    <h5>Tere Liye</h5>
                                </div>
                                <div className="uchinchi-div">
                                    <img src={pop3} alt="" />
                                    <h3>Vaqt chiziqlari</h3>
                                    <h5>Fiersa Besari</h5>
                                </div>
                                <div className="tortinchi-div">
                                    <img src={pop4} alt="" />
                                    <h3>Bo'lish</h3>
                                    <h5>Mishl Obama</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Bookcards;