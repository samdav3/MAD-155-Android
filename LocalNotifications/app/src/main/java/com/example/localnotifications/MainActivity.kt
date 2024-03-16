package com.example.localnotifications

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Intent
import android.graphics.Color
import android.graphics.drawable.Icon
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private var notificationManager: NotificationManager? = null
    private var channelID = "com.example.MAD-155Local_Notifications"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val button1: Button = findViewById(R.id.button)
        button1.setOnClickListener {
            //send notification
            sendNotification("Example Notification", "This is an example")
        }

        //create default channel
        createNotificationChannel(
            channelID,
            "Local Notify Default"
        )

        //create notify surface
        notificationManager = getSystemService(
            NOTIFICATION_SERVICE
        )as NotificationManager
    }

    fun sendNotification(title: String, content: String){
        val notificationID = 101
        val icon: Icon = Icon.createWithResource(this, android.R.drawable.ic_dialog_info)
        val resultIntent = Intent(this, ResultActivity::class.java)
        val pendingIntent = PendingIntent.getActivity(this, 0, resultIntent,
            PendingIntent.FLAG_IMMUTABLE)
        val action: Notification.Action = Notification.Action.Builder(icon, "Open", pendingIntent).build()
        val notification = Notification.Builder(this@MainActivity, channelID)
            .setContentTitle(title)
            .setContentText(content)
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setChannelId(channelID)
            .setColor(Color.GREEN)
            .setContentIntent(pendingIntent)
            .setActions(action)
            .setNumber(notificationID)
            .build()

        notificationManager?.notify(notificationID, notification)
    }

    fun createNotificationChannel(id: String, name: String){
        val importance = NotificationManager.IMPORTANCE_DEFAULT
        val channel = NotificationChannel(id, name, importance).apply {
            enableLights(true)
            lightColor = Color.RED
            enableVibration(true)
            vibrationPattern = longArrayOf(108, 280, 308)
        }

        notificationManager?.createNotificationChannel(channel)
    }
}