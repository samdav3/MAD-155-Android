package com.example.myrealtimedatabase

import android.annotation.SuppressLint
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.ValueEventListener
import com.google.firebase.database.getValue
import com.google.firebase.database.ktx.database
import com.google.firebase.ktx.Firebase

class MainActivity : AppCompatActivity() {
    private lateinit var thisAdapter: MyAdapter
    private lateinit var recyclerView: RecyclerView
    private lateinit var gridLayoutManager: GridLayoutManager
    lateinit var usersM: ArrayList<MyModel>
    private lateinit var addBtn: Button

    //READING DATA IN
    private lateinit var newUserID: EditText
    private lateinit var newUserName: EditText
    private lateinit var newUserEmail: EditText

    // DATABASES
    private lateinit var databaseWrite: DatabaseReference
    private lateinit var databaseRead: DatabaseReference
    private lateinit var userIDData: String
    private lateinit var userNameData: String
    private lateinit var userEmailData: String
    private lateinit var user1: MyModel
    private lateinit var user2: MyModel
    private lateinit var user3: MyModel

    val changeListener: ValueEventListener = object : ValueEventListener {
        override fun onDataChange(snapshot: DataSnapshot) {
                if (snapshot.hasChildren()) {
                    var count = snapshot.childrenCount
                    usersM.clear()
                    for (child in snapshot.children) {
                        val holdData = child.getValue<MyModel>()
                        usersM.add(holdData!!)
                        Log.i("child", "child.key")
                        Log.i("value", child.value.toString())
                    }
                    for (child in snapshot.children) {
                        val getData = child.getValue<MyModel>()
                        userIDData = getData?.userID.toString()
                        userNameData = getData?.userName.toString()
                        userEmailData = getData?.useremail.toString()

                        Log.i("child", "child.key")
                        Log.i("value", child.value.toString())
                        val userInfo = MyModel(userIDData, userNameData, userEmailData)
                        usersM.add(userInfo)
                    }
                }
            }


        override fun onCancelled(error: DatabaseError) {
            TODO("Not yet implemented")
        }
    }



    @SuppressLint("MissingInflatedId")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // READ DATA
        databaseRead = Firebase.database.getReference("/users")
        databaseRead.addValueEventListener(changeListener)


        usersM = ArrayList()

//        val list: ArrayList<MyModel> = ArrayList()
        user1 = MyModel("001", "Sam Callahan",
            "slcallahan3@gmail.com")
        user2 = MyModel("002", "Katie Callahan",
            "katiecal1118@yahoo.com")
        user3 = MyModel("003", "Kelsey Davenport",
            "klsydaven@gmail.com")
        newUserID = findViewById(R.id.editTextID)
        newUserName = findViewById(R.id.editTextName)
        newUserEmail = findViewById(R.id.editTextEmail)
        addBtn = findViewById(R.id.addBtn)


        //WRITE TO DATABASE
        databaseWrite = Firebase.database.reference

        databaseWrite.child("users").child(user1.userID.toString()).setValue(user1)
        databaseWrite.child("users").child(user2.userID.toString()).setValue(user2)
        databaseWrite.child("users").child(user3.userID.toString()).setValue(user3)

        //setup what this looks like RECYCLER VIEW
        recyclerView = findViewById(R.id.recyclerView2)
        gridLayoutManager = GridLayoutManager(applicationContext, 4, LinearLayoutManager.HORIZONTAL, false)
        recyclerView.layoutManager = gridLayoutManager
        recyclerView.setHasFixedSize(true)

        //CALL RECYCLER VIEW
        usersM = setupData()
        thisAdapter = MyAdapter(applicationContext, usersM)
        recyclerView.adapter = thisAdapter

    }

    private fun setupData(): ArrayList<MyModel> {
        addBtn()


        usersM.add(user1)
        usersM.add(user2)
        usersM.add(user3)
        return usersM
    }

    fun addBtn(){
        val newUserInfo = MyModel("","","")
        newUserInfo.userID = newUserID.toString()
        newUserInfo.userName = newUserName.toString()
        newUserInfo.useremail = newUserEmail.toString()

        addBtn.setOnClickListener {
            usersM.add(newUserInfo)
            //usersM = setupData()
            thisAdapter = MyAdapter(applicationContext, usersM)
            recyclerView.adapter = thisAdapter
            FirebaseDatabase.getInstance().getReference().child("users").setValue(newUserInfo)
            //FirebaseDatabase.getInstance().reference.child("users").setValue(newUserInfo)
            //databaseWrite.child("users").child(newUserInfo.userID.toString()).setValue(newUserInfo)
        }
    }


    override fun onDestroy() {
        super.onDestroy()
        databaseRead.removeEventListener(changeListener)
    }

}