package com.example.ducskt.threeword.adapter;

import android.content.Context;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.ducskt.threeword.R;
import com.example.ducskt.threeword.model.search;
import com.squareup.picasso.Picasso;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

public class SearchAdapter extends BaseAdapter {
    Context context;
    ArrayList<search> arrayDienThoai;
    List<search> list;
    public SearchAdapter(Context context, ArrayList<search> arrayDienThoai) {
        this.context = context;
        this.arrayDienThoai = arrayDienThoai;
    }

    @Override
    public int getCount() {
        return arrayDienThoai.size();
    }

    @Override
    public Object getItem(int i) {
        return arrayDienThoai.get(i);
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    public class ViewHolder{
        TextView txtKeyWord;

    }
    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        ViewHolder viewHolder=null;
        if (view==null)
        {
            viewHolder=new ViewHolder();
            LayoutInflater inflater= (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            view = inflater.inflate(R.layout.search_item,null);
            viewHolder.txtKeyWord=view.findViewById(R.id.txtKeyWord);

            view.setTag(viewHolder);
        }
        else
        {
            viewHolder = (ViewHolder) view.getTag();
        }
        search sanPham = (search) getItem(i);
        viewHolder.txtKeyWord.setText(sanPham.getKeyword());

        return view;
    }

    public void filterList(ArrayList<search> filteredList) {
        list = filteredList;
        notifyDataSetChanged();
    }
}
