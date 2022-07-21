const signupForm = $("#signup-form");
const loginForm = $("#login-form");
const errorText = $("#error-text");
const bookingForm = $("#booking-form");
const detailsButton = $("#detailsTable");

const handleSignup = async (event) => {
  event.preventDefault();

  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  errorText.empty();

  if (firstName && lastName && email && password && confirmPassword) {
    if (password === confirmPassword) {
      try {
        const payload = {
          firstName,
          lastName,
          email,
          password,
        };

        const response = await fetch("/auth/signup", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (data.success) {
          window.location.assign("/login");
        } else {
          errorText.append(
            `<p class="text-danger">Failed to create account</p>`
          );
        }
      } catch (error) {
        errorText.append(`<p class="text-danger">Failed to create account</p>`);
      }
    } else {
      errorText.append(`<p class="text-danger">Passwords do not match</p>`);
    }
  } else {
    errorText.append(`<p class="text-danger">Please complete all fields</p>`);
  }
};

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $("#email").val();
  const password = $("#password").val();

  errorText.empty();

  if (email && password) {
    try {
      const payload = {
        email,
        password,
      };

      const response = await fetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        window.location.assign("/dashboard");
      } else {
        errorText.append(`<div class="alert alert-danger" role="alert">
        failed to login!
      </div>`);
      }
    } catch (error) {
      errorText.append(`<div class="alert alert-danger" role="alert">
      failed to login!
    </div>`);
    }
  } else {
    errorText.append(`<div class="alert alert-danger" role="alert">
    Please complete all fields!
  </div>`);
  }
};

const handleCreateBooking = async (event) => {
  event.preventDefault();

  errorText.empty();
  const bookingType = $("#bookingType").val();
  const duration = $("#booking-duration").val();
  const startDate = $("#startDate").val();

  if (bookingType && duration && startDate) {
    try {
      const url = window.location.pathname;
      const bikeId = url.substring(url.lastIndexOf("/") + 1);

      console.log(bikeId);

      const payload = {
        bikeId,
        isDaily: bookingType === "daily" ? true : false,
        duration,
        startDate,
      };
      console.log(event.target);

      const response = await fetch("/api/bookings", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { data, success } = await response.json();
      console.log(success);
      if (success) {
        console.log(data);

        const modal = `<div class="modal" tabindex="-1" role="dialog" id="success-modal">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
              
                <h5 class="modal-title">Booking Confirmation</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
                <p>Booking confirmed. Total charges: ${data.total}</p>
              </div>
              <div class="modal-footer">
                
                <button
                  type="button"
                  class="btn btn-primary"
                  id="booking-dashboard"
                >
                  Go to Bookings
                </button>
              </div>
            </div>
          </div>
        </div>`;
        $("#main").append(modal);
        $("#success-modal").modal("show");

        $("#booking-dashboard").click(() => {
          console.log("hello");
          window.location.assign("/dashboard");
        });
        console.log("success");
      } else {
        errorText.append("Failed to create a new booking2. Please try again.");
      }
    } catch (error) {
      errorText.append("Failed to create a new booking1. Please try again.");
    }
  } else {
    errorText.append("Please complete all required fields.");
  }
};

const handleLogout = async (event) => {
  event.preventDefault();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch("/auth/logout", options);
  if (response.status !== 204) {
    console.error("Logout failed");
  } else {
    window.location.replace("/");
  }
};

$("#logout-btn").click(handleLogout);

const handleDetailsPage = (event) => {
  event.preventDefault();
  const target = $(event.target);

  const rowId = target.data("attribute");

  console.log("rowId:", rowId);
  window.location.assign("/bookings/" + rowId);
};

detailsButton.click(handleDetailsPage);

signupForm.submit(handleSignup);
loginForm.submit(handleLogin);
bookingForm.submit(handleCreateBooking);
