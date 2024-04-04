package com.example.myrealtimedatabase

import android.text.Editable
import androidx.lifecycle.ViewModel
import com.google.firebase.database.DatabaseReference

class MyModel {

        var userID: String? = ""
        var userName: String? = ""
        var useremail: String? = ""

        constructor(userID: String?, userName: String?, useremail: String?) {
            this.userID = userID
            this.userName = userName
            this.useremail = useremail
        }

}