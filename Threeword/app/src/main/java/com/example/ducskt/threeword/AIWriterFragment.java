package com.example.ducskt.threeword;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;
import android.widget.SearchView;

import com.example.ducskt.threeword.adapter.SearchAdapter;
import com.example.ducskt.threeword.model.search;

import java.util.ArrayList;

public class AIWriterFragment extends Fragment  {
Activity context;
    ListView lvSearch;
    SearchAdapter dienThoaiAdapter;
    ArrayList<search> mangdt;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view =inflater.inflate(R.layout.fragment_aiwriter, container, false);
        addControls(view);
        context = getActivity();
        setHasOptionsMenu(true);
        return view;

    }

    public void addControls(View view){
        lvSearch = view.findViewById(R.id.lvSearch);
        mangdt = new ArrayList<>();
        dienThoaiAdapter=new SearchAdapter(getContext(),mangdt);
        lvSearch.setAdapter(dienThoaiAdapter);
    }

    @Override
    public void onCreateOptionsMenu(Menu menu, MenuInflater inflater) {

        super.onCreateOptionsMenu(menu,inflater);
        inflater.inflate(R.menu.menu_timkiem,menu);
        MenuItem mnuSearch=menu.findItem(R.id.mnuSearch);
        SearchView searchView= (SearchView) mnuSearch.getActionView();
        searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String query) {

                return false;
            }

            @Override
            public boolean onQueryTextChange(String newText) {
                dienThoaiAdapter
                return false;
            }
        });
    }

}
