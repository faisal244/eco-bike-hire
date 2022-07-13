const signupForm = $('#signup-form');
const loginForm = $('#login-form');

const handleSignup = async (event) => {
  event.preventDefault();

  const firstName = $('#firstName').val();
  const lastName = $('#lastName').val();
  const email = $('#email').val();
  const password = $('#password').val();
  const confirmPassword = $('#confirmPassword').val();
  const profileImageUrl = $('#profileImageUrl').val();

  if (
    firstName &&
    lastName &&
    email &&
    password &&
    confirmPassword &&
    profileImageUrl
  ) {
    if (password === confirmPassword) {
      try {
        const payload = {
          firstName,
          lastName,
          email,
          password,
          profileImageUrl,
        };

        const response = await fetch('/auth/signup', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (data.success) {
          window.location.assign('/login');
        } else {
          renderError('signup-error', 'Failed to create account. Try again.');
        }
      } catch (error) {
        renderError('signup-error', 'Failed to create account. Try again.');
      }
    } else {
      renderError('signup-error', 'Passwords do not match. Try again.');
    }
  } else {
    renderError('signup-error', 'Please complete all required fields.');
  }
};

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $('#email').val();
  const password = $('#password').val();

  if (email && password) {
    try {
      const payload = {
        email,
        password,
      };

      const response = await fetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        window.location.assign('/dashboard');
      } else {
        renderError('login failed. please try again.');
      }
    } catch (error) {
      renderError('login failed. please try again.');
    }
  } else {
    renderError('login-error', 'Please complete all required fields.');
  }
};

signupForm.submit(handleSignup);
loginForm.submit(handleLogin);
