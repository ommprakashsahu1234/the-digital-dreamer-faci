window.onload = alert("Last Updated : 01.09.2024");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon);

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlon }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                document.getElementById("location").innerHTML = "Your current address is: " + results[1].formatted_address;
            } else {
                document.getElementById("location").innerHTML = "No results found";
            }
        } else {
            document.getElementById("location").innerHTML = "Geocoder failed due to: " + status;
        }
    });
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("location").innerHTML = "An unknown error occurred.";
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('nav ul li a');


    const mainContent = document.querySelector('main');


    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const sectionId = link.getAttribute('href').substring(1);



            loadContent(sectionId);
        });
    });

    function loadContent(sectionId) {
        let content = '';

        switch (sectionId) {
            case 'guidelines':
                content = `
                    <section id="guidelines" class="section">
                        <div class="container">
                            <h2>Tourism Guidelines</h2>
                            <!-- Beaches Section -->
                            <section id="beaches" class="section">
                                <div class="container">
                                    <h2 style="font-size: 2em; font-weight: bold;">Beaches</h2>
                                    <p style="font-size: 1.2em;">
                                        India boasts a coastline dotted with some of the world’s most beautiful beaches. From the vibrant shores of Goa to the serene sands of Kerala, there’s a beach for every traveler.
                                    </p>
                                    <p style="font-size: 1.2em;">
                                        <strong>Goa:</strong> Known for its lively nightlife and pristine beaches like Baga and Anjuna, Goa is a favorite destination for beach lovers. Ensure to stay hydrated and protect yourself from the sun. Also, be cautious of strong currents and follow local safety advisories.
                                    </p>
                                    <p style="font-size: 1.2em;">
                                        <strong>Kerala:</strong> With its tranquil backwaters and stunning beaches such as Varkala and Kovalam, Kerala offers a more serene experience. Opt for eco-friendly activities and support local conservation efforts to preserve the natural beauty.
                                    </p>
                                    <p style="font-size: 1.2em;">
                                        <strong>Andaman and Nicobar Islands:</strong> These islands are famous for their crystal-clear waters and coral reefs. Engage in responsible snorkeling and diving practices to protect the marine environment.
                                    </p>
                                </div>
                            </section>

                            <!-- Temples Section -->
                            <section id="temples" class="section">
                                <div class="container">
                                    <h2 style="font-size: 2em; font-weight: bold;">Temples and Spiritual Sites</h2>
                                    <p style="font-size: 1.2em;">
                                        India is home to a vast number of temples and spiritual sites that reflect its deep-rooted traditions and spirituality.
                                    </p>
                                    <p style="font-size: 1.2em;">
                                        <strong>Varanasi:</strong> One of the oldest cities in the world, Varanasi is known for its ghats and temples along the Ganges River. Respect local customs, dress modestly, and be mindful of the religious practices observed here.
                                    </p>
                                    <p style="font-size: 1.2em;">
                                        <strong>Rajasthan:</strong> The state is renowned for its majestic temples such as the Dilwara Temples and the Brahma Temple in Pushkar. When visiting these sites, adhere to the dress code and follow the local customs and etiquette.
                                    </p>
                                </div>
                            </section>

                            <!-- Historical Places Section -->
                            <section id="historical" class="section">
                                <div class="container">
                                    <h2 style="font-size: 2em; font-weight: bold;">Historical Places</h2>
                                    <p style="font-size: 1.2em;">
                                        India’s rich history is reflected in its numerous historical monuments and sites, each telling a unique story of its past.
                                    </p>
                                    <p style="font-size: 1.2em;">
                                        <strong>Taj Mahal:</strong> Located in Agra, this iconic white marble mausoleum is a UNESCO World Heritage site and a symbol of eternal love. Be sure to follow the preservation rules and respect the monument’s sanctity.
                                    </p>
                                    <p style="font-size: 1.2em;">
                                        <strong>Red Fort:</strong> This historic fort in Delhi is known for its impressive Mughal architecture. Explore its museums and gardens while adhering to the guidelines provided by the local authorities.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </section>
                `;
                break;
            case 'accommodations':
                content = `
                    <section id="accommodations" class="section">
                        <div class="container">
                            <h2>Hotel Accommodations</h2>
                            <!-- Hotel Accommodations Section -->
                            <section id="accommodations" class="section">
                                <div class="container">
                                    <h2 style="font-size: 2em; font-weight: bold;">Hotel Accommodations</h2>
                                    <p style="font-size: 1.2em;">
                                        When planning your stay in India, consider booking accommodations that offer the best amenities and services for a comfortable experience. Here are some guidelines to help you choose:
                                    </p>
                                    <ul style="font-size: 1.2em;">
                                        <li>Check reviews and ratings to ensure quality service.</li>
                                        <li>Verify the hotel's safety and hygiene standards.</li>
                                        <li>Confirm the cancellation and refund policies.</li>
                                        <li>Look for additional facilities such as free Wi-Fi, breakfast, and parking.</li>
                                    </ul>

                                    <h3 style="font-size: 1.5em; font-weight: bold;">Book Your Hotel</h3>
                                    <p style="font-size: 1.2em;">
                                        Please fill out the form below to book your stay. The name and email are required to verify your identity as per the login in <b>The Digital Dreamer's</b> Mobile Application.
                                    </p>
                                    <form id="hotel-booking-form" method="POST">
                                        <label for="hotel-select" style="font-size: 1.2em;">Select Hotel:</label>
                                        <select id="hotel-select" name="hotel" style="font-size: 1em; padding: 10px; margin-bottom: 10px;">
                                            <option value="hotel1">Taj Mahal Palace, Mumbai</option>
                                            <option value="hotel2">Oberoi Udaivilas, Udaipur</option>
                                            <option value="hotel3">ITC Grand Chola, Chennai</option>
                                            <option value="hotel4">The Leela Palace, Bengaluru</option>
                                            <option value="hotel5">The Imperial, New Delhi</option>
                                            <option value="hotel6">Ritz-Carlton, Hyderabad</option>
                                            <option value="hotel7">JW Marriott, Jaipur</option>
                                            <option value="hotel8">Park Hyatt, Goa</option>
                                            <option value="hotel9">The Lalit, Kolkata</option>
                                            <option value="hotel10">Ananda in the Himalayas, Uttarakhand</option>
                                        </select>
                                        <br>
                                        <label for="name" style="font-size: 1.2em;">Name:</label>
                                        <input type="text" id="name" name="name" required style="font-size: 1em; padding: 10px; margin-bottom: 10px;">
                                        <br>
                                        <label for="email" style="font-size: 1.2em;">Email:</label>
                                        <input type="email" id="email" name="email" required style="font-size: 1em; padding: 10px; margin-bottom: 10px;">
                                        <br>
                                        <button type="submit" onclick="alert('Facility will be Available Soon.')" style="font-size: 1em; padding: 10px 20px;">Submit</button>
                                    </form>

                                    <h3 style="font-size: 1.5em; font-weight: bold;">Hotel Facilities and Pricing</h3>
                                    <p style="font-size: 1.2em;">
                                        Below is a table showing the facilities offered by the top hotels and their charges. This will help you make an informed choice based on your preferences and budget.
                                    </p>

                                    <table style="width: 100%; border-collapse: collapse; font-size: 1em;">
                                        <thead>
                                            <tr>
                                                <th style="border: 1px solid #ddd; padding: 8px;">Hotel</th>
                                                <th style="border: 1px solid #ddd; padding: 8px;">Facilities</th>
                                                <th style="border: 1px solid #ddd; padding: 8px;">Price per Night</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border: 1px solid #ddd; padding: 8px;">Taj Mahal Palace, Mumbai</td>
                                                <td style="border: 1px solid #ddd; padding: 8px;">Free Wi-Fi, Pool, Gym</td>
                                                <td style="border: 1px solid #ddd; padding: 8px;">₹20,000</td>
                                            </tr>
                                            <tr>
                                                <td style="border: 1px solid #ddd; padding: 8px;">Oberoi Udaivilas, Udaipur</td>
                                                <td style="border: 1px solid #ddd; padding: 8px;">Spa, Breakfast, Shuttle Service</td>
                                                <td style="border: 1px solid #ddd; padding: 8px;">₹25,000</td>
                                            </tr>
                                            <tr>
                                                <td style="border: 1px solid #ddd; padding: 8px;">ITC Grand Chola, Chennai</td>
                                                <td style="border: 1px solid #ddd; padding: 8px;">Pool, Free Breakfast, Parking</td>
                                                <td style="border: 1px solid #ddd; padding: 8px;">₹15,000</td>
                                            </tr>
                                            <!-- Add more rows as needed -->
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    </section>
                `;
                break;
            case 'safety':
                content = `
                    <section id="safety" class="section">
                        <div class="container">
                            <h2>Safety Measures</h2>
                            <!-- Safety Measures Section -->
                            <section id="safety-measures" class="section">
                                <div class="container">
                                    <h2 style="font-size: 2em; font-weight: bold;">Safety Measures</h2>
                                    <p style="font-size: 1.2em;">
                                        Ensuring your safety is crucial while traveling. Here are some essential safety measures to follow:
                                    </p>
                                    <ul style="font-size: 1.2em;">
                                        <li>Always carry a copy of your passport and important documents.</li>
                                        <li>Be aware of local emergency contact numbers and procedures.</li>
                                        <li>Keep your belongings secure and avoid displaying valuable items.</li>
                                        <li>Stay informed about the local weather and potential natural hazards.</li>
                                        <li>Follow health advisories and stay updated on vaccination requirements.</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </section>
                `;
                break;
            case 'reviews':
                content = `
                    <section id="reviews" class="section">
                        <div class="container">
                            <h2>Reviews and Ratings</h2>
                            <!-- Reviews and Ratings Section -->
                            <section id="reviews-ratings" class="section">
                                <div class="container">
                                    <h2 style="font-size: 2em; font-weight: bold;">Reviews and Ratings</h2>
                                    <p style="font-size: 1.2em;">
                                        Read through the reviews and ratings to get insights into various hotels, restaurants, and attractions. Your feedback helps others make better decisions.
                                    </p>
                                    <h3 style="font-size: 1.5em; font-weight: bold;">Recent Reviews</h3>
                                    <ul style="font-size: 1.2em;">
                                        <li><strong>Hotel Taj Mahal Palace, Mumbai:</strong> "An unforgettable stay with exceptional service and luxury. Highly recommend!" - <i>John Doe</i></li>
                                        <li><strong>Oberoi Udaivilas, Udaipur:</strong> "A serene escape with stunning views and top-notch amenities. Perfect for a relaxing vacation." - <i>Jane Smith</i></li>
                                        <li><strong>ITC Grand Chola, Chennai:</strong> "Excellent hospitality and great facilities. A must-visit for travelers to Chennai." - <i>Michael Johnson</i></li>
                                        <!-- Add more reviews as needed -->
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </section>
                `;
                break;
            case 'weather':
                content = `
                    <section id="weather" class="section">
                        <div class="container">
                            <h2>Weather/Environmental Updates</h2>
                            <!-- Weather/Environmental Updates Section -->
                            <section id="weather-updates" class="section">
                                <div class="container">
                                    <h2 style="font-size: 2em; font-weight: bold;">Weather and Environmental Updates</h2>
                                    <div id="location">Your address will be displayed here.</div>

                                    <p style="font-size: 1.2em;">
                                        Stay updated with the latest weather and environmental conditions to plan your travel activities accordingly. Here are some key updates:
                                    </p>
                                    <h3 style="font-size: 1.5em; font-weight: bold;">Current Weather</h3>
                                    <p style="font-size: 1.2em;">
                                        Check local weather forecasts and conditions to avoid adverse weather impacts on your travel plans.
                                    </p>

                                    <h3 style="font-size: 1.5em; font-weight: bold;">Environmental Alerts</h3>
                                    <p style="font-size: 1.2em;">
                                        Stay informed about any environmental alerts such as pollution levels or natural hazards that may affect your travel.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </section>
                `;
                break;
            case 'maps':
                content = `
                    <section id="maps" class="section">
                        <div class="container">
                            <h2>Maps</h2>
                            <!-- Maps Section -->
                            <section id="maps" class="section">
                                <div class="container">
                                    <h2 style="font-size: 2em; font-weight: bold;">Maps</h2>
                                    <p style="font-size: 1.2em;">
                                        Explore interactive maps of the tourist destinations to navigate easily and plan your visits effectively. Here are some useful resources:
                                    </p>
                                    <ul style="font-size: 1.2em;">
                                        <li><a href="https://www.google.com/maps" target="_blank">Google Maps</a></li>
                                        <li><a href="https://maps.apple.com" target="_blank">Apple Maps</a></li>
                                        <li><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </section>
                `;
                break;
            case 'support':
                content = `
                    <section id="support" class="section">
                        <div class="container">
                            <h2>Customer Support</h2>
                            <!-- Customer Support Section -->
                            <section id="customer-support" class="section">
                                <div class="container">
                                    <h2 style="font-size: 2em; font-weight: bold;">Customer Support</h2>
                                    <p style="font-size: 1.2em;">
                                        For any queries or assistance, please reach out to our customer support team. We are here to help you with your travel needs.
                                    </p>
                                    <h3 style="font-size: 1.5em; font-weight: bold;">Contact Us</h3>
                                    <p style="font-size: 1.2em;">
                                        <strong>Email:</strong> <a href="mailto:support@tourismindia.com">support@tourismindia.com</a>
                                    </p>
                                    <p style="font-size: 1.2em;">
                                        <strong>Phone:</strong> <a onclick="window.location.href = 'tel:1234567890';">+91 8144219523</a>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </section>
                `;
                break;
                case 'admin':
                    var un = prompt("Enter User Name : ");
                    var pw = prompt("Enter the Admin Code");
                
                    if ((un == "Omm" && pw == "Omm94") || 
                        (un == "Pritiranjan" && pw == "Priiti103") || 
                        (un == "Ankita" && pw == "Ankita10") || 
                        (un == "Prasanjit" && pw == "Prasanjit99") || 
                        (un == "Mrutyunjay" && pw == "Mrutyunjay90") || 
                        (un == "Nihar" && pw == "Nihar14")) {
                
                        alert("Admin Verified.");
                
                        content = `
                        <section id="admin" class="section">
                            <div class="container">
                                <h2>Admin</h2>
                                <section id="admin-side" class="section">
                                    <div class="container">
                                        <h2 style="font-size: 2em; font-weight: bold;">Admin</h2>
                                        <p style="font-size: 1.2em;">
                                            These details are the ref for the Admin of <b style="color: yellow;">The Digital Dreamers</b> for the development of the Site.
                                        </p>
                                        <ul style="font-size: 1.2em;" type="square">
                                            <li>Last Updated : 01.09.2024</li>
                                            <li>Admin Name : ${un}</li>
                                            <li>Admin Code : ${pw}</li>
                                            <li>Team : The Digital Dreamers</li>
                                            <li><a href="mailto:opsommprakash+DigitalDreamersAdminSupport@outlook.com">Admin Support</a></li>
                                            <li>Hash</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                        `;
                    }
                else {
                    alert("Incorrect Admin Hash.");
                    content = `
                    <section id="admin" class="section">
                    <div class="container">
                    <h2><b style="color: red;">Incorrect Admin Hash</b></h2>
                    <section id="admin-side" class="section">
                    <div class="container">
                    <h2 style="font-size: 2em; font-weight: bold;">Admin</h2>
                                        <p style="font-size: 1.2em;">
                                            This Page is only for the Admins of this Website. Kindly Enter Correct Admin hash to see this Page. <b style="color: yellow;">The Digital Dreamers</b> for the development of the Site.
                                            </p>
                                            
                                            <p> Contents not available. Only Admin can see it.</p>
                                            </div>
                                            </section>
                            </div>
                    </section>
                            `;
                        }
            break;
            default:
                content = `
                    <section id="home" class="section">
                        <div class="container">
                            <h2>Welcome to Our Tourism Site</h2>
                            <p>Explore the various sections to find information about tourism guidelines, accommodations, safety measures, reviews, weather updates, maps, and customer support.</p>
                        </div>
                    </section>
                `;
                break;
        }

        // Update the main content with the new section
        mainContent.innerHTML = content;
    }

    // Load the default content
    loadContent('home');
});
