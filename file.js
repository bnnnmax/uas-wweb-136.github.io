function showPage(pageName) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            document.getElementById(pageName).classList.add('active');
            
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        }

        let movieCounter = 4;

        document.getElementById('movieForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('movieTitle').value;
            const genre = document.getElementById('movieGenre').value;
            const year = document.getElementById('movieYear').value;
            const rating = document.getElementById('movieRating').value;
            const director = document.getElementById('movieDirector').value;
            const description = document.getElementById('movieDescription').value;

            // Add new row to table
            const tableBody = document.querySelector('#movieTable tbody');
            const newRow = tableBody.insertRow();
            
            newRow.innerHTML = `
                <td>${movieCounter}</td>
                <td>${title}</td>
                <td>${genre}</td>
                <td>${year}</td>
                <td>${rating}</td>
                <td>${director}</td>
            `;

            movieCounter++;

            // Show success message
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);

            // Reset form
            this.reset();
        });

        // Login form validation
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            
            // Clear previous error messages
            document.getElementById('usernameError').textContent = '';
            document.getElementById('passwordError').textContent = '';
            
            let hasError = false;

            // Validate username
            if (username === '') {
                document.getElementById('usernameError').textContent = 'Username tidak boleh kosong!';
                hasError = true;
            }

            // Validate password
            if (password === '') {
                document.getElementById('passwordError').textContent = 'Password tidak boleh kosong!';
                hasError = true;
            }

            // If no errors, simulate successful login
            if (!hasError) {
                alert('Login berhasil! Selamat datang, ' + username + '!');
                this.reset();
            }
        });

        // Add smooth animations
        document.addEventListener('DOMContentLoaded', function() {
            const movieCards = document.querySelectorAll('.movie-card');
            movieCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
        });