<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {

}
</script>

<style>
.form {
  background: white;
  padding: 2rem;
  border-radius: 0.25rem;

  display: flex;
  flex-direction: column;
  align-content: center;
}

.form h1 {
  margin-bottom: 2rem;
}

.form label, 
.form input, 
.form textarea {
  display: block;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}

.form input,
.form textarea {
  margin-bottom: 1em;
  border: 1px solid #bbc;
  padding: 1rem;
}

.form input,
.form textarea,
.form button {
  border-radius: 0.25rem;
}

.form textarea {
  resize: vertical;
}

.form button {
  max-width: max-content;
  align-self: center;
  padding: 0.75em 1.5em;
  border: none;
  background: rgb(109, 177, 0);
  color: white;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: clamp(1rem, 3vw, 1.5rem);
}
</style>