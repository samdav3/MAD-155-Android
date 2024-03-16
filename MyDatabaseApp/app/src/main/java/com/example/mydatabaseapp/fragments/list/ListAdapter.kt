package com.example.mydatabaseapp.fragments.list


import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.navigation.NavController
import androidx.navigation.findNavController
import androidx.navigation.fragment.NavHostFragment
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.RecyclerView
import com.example.mydatabaseapp.R
import com.example.mydatabaseapp.model.User

class ListAdapter(private var userList: List<User>): RecyclerView.Adapter<ListAdapter.MyViewHolder>() {

    private  lateinit var navController: NavController
    private lateinit var navHostFragment: NavHostFragment

    class MyViewHolder(itemView: View): RecyclerView.ViewHolder(itemView){
        init{
            itemView.setOnClickListener {
                it.findNavController().navigate(R.id.action_listFragment_to_updateFragment)
            }
            //findViewById<androidx.constraintlayout.widget.ConstraintLayout>(R.id.rowLayout)
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.custom_row, parent, false)
        return MyViewHolder(view)
        //MyViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.custom_row, parent, false))
    }

    override fun getItemCount(): Int {
        return userList.size
    }

    @SuppressLint("ResourceType")
    override fun onBindViewHolder(holder: MyViewHolder, position: Int) {

        navController = navHostFragment.navController
        navController.navInflater
        navHostFragment.findNavController()

        val currentItem = userList[position]
        holder.itemView.findViewById<TextView>(R.id.textViewID).text = currentItem.id.toString()
        holder.itemView.findViewById<TextView>(R.id.textViewFName).text = currentItem.firstName
        holder.itemView.findViewById<TextView>(R.id.textViewLName).text = currentItem.lastName
        holder.itemView.findViewById<TextView>(R.id.textViewAge).text = currentItem.age.toString()
        holder.itemView.findViewById<TextView>(R.layout.custom_row)
        val action = ListFragmentDirections.actionListFragmentToUpdateFragment(currentItem)
        navHostFragment.findNavController().navigate(action)

    }

    @SuppressLint("NotifyDataSetChanged")
    fun setData(user: List<User>){
        this.userList = user
        notifyDataSetChanged()
    }
}