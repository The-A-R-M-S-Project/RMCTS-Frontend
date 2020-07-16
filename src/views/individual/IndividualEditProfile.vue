<template>
  <div class="m-5 px-5">
    <form>
      <div class="form-group">
        <label for="exampleTextarea1">Description</label>
        <textarea
          class="form-control"
          id="exampleTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="institution">Institution</label>
        <input
          placeholder="e.g. Makerere University"
          class="form-control"
          id="input-institution"
        />
      </div>
      <div class="form-group">
        <label for="input-title">Title</label>
        <input
          placeholder="e.g. Lecturer, Student"
          class="form-control"
          id="input-title"
        />
      </div>
      <div class="form-group">
        <label for="input-department">Department</label>
        <input
          placeholder="e.g. Lecturer, Student"
          class="form-control"
          id="input-department"
        />
      </div>
      <div class="form-group">
        <label for="input-district">District</label>
        <input
          placeholder="e.g. Kampala"
          class="form-control"
          id="input-district"
        />
      </div>
      <div class="form-group">
        <label for="input-gender">Gender</label>
        <select class="form-control form-control-md">
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div class="form-group">
        <label for="input-contact">Contact</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">+256</div>
          </div>
          <input
            placeholder="70000000"
            class="form-control"
            id="input-contact"
          />
        </div>
      </div>
    </form>
    <div class="text-center">
      <button type="button" class="btn btn-success">Update</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
