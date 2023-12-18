package com.lifecyclehook;

class MainActivity {
  constructor() {
    this.switchMode = null;
    this.nightMode = false;
  }

  onCreate() {
    const sharedPreferences = getSharedPreferences('Mode', MODE_PRIVATE);
    this.nightMode = sharedPreferences.getBoolean('nightMode', false);

    if (this.nightMode) {
      AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES);
    }

    // User login will be required for the user id

    const toUserAc = document.getElementById('toUserFromMain');
    toUserAc.addEventListener('click', () => {
      const intent = new Intent(this, UserLoginActivity);
    this.startActivity(intent);
    });

    const toManagAc = document.getElementById('toManagFromMain');
    toManagAc.addEventListener('click', () => {
      const intent = new Intent(this, ManagementActivity);
    this.startActivity(intent);
    });

    const toSetAc = document.getElementById('toSetFromMain');
    toSetAc.addEventListener('click', () => {
      const intent = new Intent(this, SettingsActivity);
    this.startActivity(intent);
    });
  }
}
