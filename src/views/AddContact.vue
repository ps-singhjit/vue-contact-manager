<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success">Add Contact</p>
        <p class="fst-italic">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, autem
          ipsam fugiat laboriosam eos ratione incidunt, natus impedit obcaecati
          tempora accusantium perspiciatis assumenda eveniet. Quidem, architecto
          maiores. Ipsam, sint unde!
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <form action="">
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Photo URL" />
          </div>
          <div class="mb-2">
            <input type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="mb-2">
            <input type="phone" class="form-control" placeholder="Mobile" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Company" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Title" />
          </div>
          <div class="mb-2">
            <select class="form-control">
              <option value="">Select Group</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Create" />
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img
          src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"
          class="contact-img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddContact",
};
</script>

<style scoped>
</style>