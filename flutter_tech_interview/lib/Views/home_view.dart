import 'package:crypto/crypto.dart' as crypto;
import 'dart:convert';

import 'package:flutter/material.dart';
import 'list_view.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Center(
        child: Container(
          child: ElevatedButton(
            onPressed: () {
              Navigator.push(context, MaterialPageRoute(builder: (context) => ListViewPage()));
            },
            style: ElevatedButton.styleFrom(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(32.0),
              ),
            ),
            child: Text("Press Me"),
          ),
        ),
      ),
    );
  }

  Map<String, String> setQueryParams(int limit) {
    var ts = DateTime.now().toString();
    var hash = crypto.md5.convert(utf8.encode(ts + "Your Private Key" + "Your Public Key")).toString();

    final queryParams = {
      "apikey": "Your Public Key",
      "ts": ts,
      "hash": hash,
      "limit": "$limit",
    };

    return queryParams;
  }

  void getApiCall() {}
}
