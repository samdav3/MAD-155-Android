package com.example.mydatabaseapp.fragments.list

import android.animation.LayoutTransition
import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.constraintlayout.widget.ConstraintSet.Constraint
import androidx.constraintlayout.widget.ConstraintSet.Layout
import androidx.navigation.findNavController
import androidx.recyclerview.widget.RecyclerView
import com.example.mydatabaseapp.R
import com.example.mydatabaseapp.model.User

class ListAdapter: RecyclerView.Adapter<ListAdapter.MyViewHolder>() {

    private var userList = emptyList<User>()

    class MyViewHolder(itemView: View): RecyclerView.ViewHolder(itemView) {

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        return MyViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.custom_row, parent, false))
    }

    override fun getItemCount(): Int {
        return userList.size
    }

    @SuppressLint("ResourceType")
    override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
        val currentItem = userList[position]
        holder.itemView.findViewById<TextView>(R.id.textViewID).text = currentItem.id.toString()
        holder.itemView.findViewById<TextView>(R.id.textViewFName).text = currentItem.firstName
        holder.itemView.findViewById<TextView>(R.id.textViewLName).text = currentItem.lastName
        holder.itemView.findViewById<TextView>(R.id.textViewAge).text = currentItem.age.toString()

        holder.itemView.findViewById<androidx.constraintlayout.widget.ConstraintLayout>(R.layout.custom_row).setOnClickListener{
            val action = ListFragmentDirections.actionListFragmentToUpdateFragment(currentItem)
            holder.itemView.findNavController().navigate(action)
    }
    }

    fun setData(user: List<User>){
        this.userList = user
        notifyDataSetChanged()
    }
}