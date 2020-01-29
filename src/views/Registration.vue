<template>
  <div>
    <main class="page registration-page">
      <section class="clean-block clean-form dark">
        <div class="container">
          <div class="block-heading">
            <h2 class="text-info">Registration</h2>
          </div>
          <form>
            <div class="form-group">
              <label for="name">Name</label
              ><input class="form-control item" type="text" id="name" />
            </div>
            <div class="form-group">
              <label for="password">Password</label
              ><input class="form-control item" type="password" id="password" />
            </div>
            <div class="form-group">
              <label for="password"> Confirm Password</label
              ><input class="form-control item" type="password" id="password" />
            </div>
            <div class="form-group">
              <label for="email">Email</label
              ><input class="form-control item" type="email" id="email" />
            </div>
            <div class="form-group">
              <label for="tel">Contact</label
              ><input class="form-control item" type="tel" />
            </div>
            <div class="row form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox"
                /><label class="form-check-label" for="checkbox">Male</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox"
                /><label class="form-check-label" for="checkbox">Female</label>
              </div>
            </div>

            <button class="btn btn-primary btn-block" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<style></style>
