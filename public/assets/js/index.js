const signupForm = $("#signup-form");
const loginForm = $("#login-form");
const errorText = $("#error-text");
const bookingForm = $("#booking-form");

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
        errorText.append(`<p class="text-danger">Failed to login1</p>`);
      }
    } catch (error) {
      errorText.append(`<p class="text-danger">Failed to login2</p>`);
    }
  } else {
    errorText.append(`<p class="text-danger">Please complete all fields</p>`);
  }
};

const handleValidateBooking = async (event) => {
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

      const response = await fetch("/api/bookings/validate", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { isUnavailable, success } = await response.json();
      console.log(success);
      if (isUnavailable) {
        //  show unavailable modal

        const notAvailableModal = `<div class="modal" tabindex="-1" role="dialog" id= "unavailable-modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
      </div>
      <div class="modal-body">
        <p>The bike is not available for booking. Please select another booking date or another bike</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary"id="view-bikes">View all bikes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
        $("#main").append(notAvailableModal);
        $("#unavailable-modal").modal("show");
        $("#view-bikes").click(() => {
          console.log("hello");
          window.location.assign("/bikes");
        });
        console.log("success");
      } else {
        //  modal The bike is availble to . Do u want to continue?
        const successModal = `<div class="modal" tabindex="-1" role="dialog" id= "success-modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
      </div>
      <div class="modal-body">
        <p>The bike is available for booking. Do you want to continue booking?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id = "save-changes">Book Now</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
        $("#main").append(successModal);
        $("#success-modal").modal("show");
        $("#save-changes").click(() => {
          console.log("hello");
        });
      }
    } catch (error) {
      errorText.append("Failed to create a new booking1. Please try again.");
    }
  } else {
    errorText.append("Please complete all required fields.");
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

signupForm.submit(handleSignup);
loginForm.submit(handleLogin);
bookingForm.submit(handleValidateBooking);
