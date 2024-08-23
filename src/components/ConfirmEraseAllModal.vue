<template>
  <div class="dialog-overlay" @click="triggerBounce">
    <div class="dialog-box" :class="isBouncing ? 'bounce' : ''" @click.stop>
      <p>Do you want to ERASE ALL the workflow?</p>
      <div class="buttons">
        <button class="yes-button" @click="confirmEraseAll">Yes</button>
        <button class="no-button" @click="closeModal">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmEraseAllModal",
  data() {
    return {
      isBouncing: false
    }
  },
  methods: {
    confirmEraseAll() {
      this.$emit('erase-all');
    },
    closeModal() {
      this.$emit('close-modal');
    },
    triggerBounce() {
      this.isBouncing = true;
      setTimeout(() => {
        this.isBouncing = false;
      }, 500);
    }
  }
}
</script>

<style scoped>
@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-100px);
  }

  60% {
    transform: translateY(-50px);
  }
}

.dialog-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(15, 15, 15, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .dialog-box {
    margin-left: 278px;
    background-color: rgb(30, 60, 90);
    padding: 16px;
    color: white;
    line-height: 24px;
    box-shadow: rgba(155, 215, 255, 0.685) 0px 0px 15px;
    width: 320px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 20px;

    &.bounce {
      animation: bounce 0.5s alternate;
    }

    .buttons {
      display: flex;
      justify-content: space-evenly;

      button {
        height: 36px;
        width: 120px;
        border-radius: 20px;
        font-size: 16px;
        font-weight: 700;
        border: none;
        cursor: pointer;
        outline: none;
      }

      .yes-button {
        color: green;
        border: 2px solid green
      }

      .no-button {
        background-color: rgb(255, 105, 105);
        border: 2px solid red;
        color: white;
      }
    }
  }
}
</style>